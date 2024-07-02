import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from 'react-google-recaptcha';
import EmailAnimation from "../assets/contact-icon.webp";
import '../styles/contact.scss';

const ContactForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const { t } = useTranslation();

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t('contact_form.name_required')),
    email: Yup.string().email(t('contact_form.email_invalid')).required(t('contact_form.mail_required')),
    message: Yup.string().required(t('contact_form.message_required')),
});

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (!recaptchaValue) {
      alert('Please complete the reCAPTCHA');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, recaptcha: recaptchaValue }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      //console.log('Success:', data);
      resetForm();
      setShowSuccessIcon(true);
      setTimeout(() => {
      setShowSuccessIcon(false);
      }, 10000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='contact-container'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form">
            <p>{t("contact_form.title")}</p>
            <div className="contact-form--label-n-field">
              <label htmlFor="name">{t("contact_form.input_name")} : </label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="contact-form--label-n-field">
              <label htmlFor="email">{t("contact_form.input_mail")} : </label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="contact-form--label-n-field">
              <label htmlFor="message">{t("contact_form.input_message")} : </label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>

            <div className="captcha-container">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={setRecaptchaValue}
              />
            </div>

            <button
              className="contact-form--submit-button"
              type="submit"
              disabled={isSubmitting || showSuccessIcon}
            >
              {showSuccessIcon ? (
                <p className='validation-msg'>
                  {t("contact_form.validation_message")} !
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#15d535" }} className='validation-icon' />
                </p>
              ) : (
                t("contact_form.button")
              )}
            </button>
          </Form>
        )}
      </Formik>
      <img src={EmailAnimation} loading="lazy" alt="Sending email animation" />
    </div>
  );
};

export default ContactForm;