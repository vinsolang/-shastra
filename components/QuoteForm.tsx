import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface QuoteFormProps {
    className?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ className = "" }) => {
    const { t } = useLanguage();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const fname = (formData.get('fname') as string || '').trim();
        const lname = (formData.get('lname') as string || '').trim();
        const email = (formData.get('email') as string || '').trim();
        const projectType = (formData.get('projectType') as string || '').trim();
        const messageText = (formData.get('message') as string || '').trim();

        let message = '';

        // If no text inputs are provided, send the default interest message
        if (!fname && !lname && !email && !messageText) {
            message = "Hi, I’m interested in your services and would like more information.";
        } else {
            message = `
New Quote Request:
First Name: ${fname || 'N/A'}
Last Name: ${lname || 'N/A'}
Email: ${email || 'N/A'}
Project Type: ${projectType || 'N/A'}
Message: ${messageText || 'N/A'}
            `;
        }

        const encodedMessage = encodeURIComponent(message.trim());
        const telegramUrl = `https://t.me/Shastrahome?text=${encodedMessage}`;
        
        window.open(telegramUrl, '_blank');
    };
    
    return (
        <div className={className}>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-text-main mb-6">{t('contact.form.title')}</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-semibold text-text-main uppercase tracking-widest">{t('contact.form.fname')}</label>
                  <input name="fname" type="text" className="w-full px-3 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-primary transition-colors outline-none font-light text-sm" placeholder="John" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-semibold text-text-main uppercase tracking-widest">{t('contact.form.lname')}</label>
                  <input name="lname" type="text" className="w-full px-3 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-primary transition-colors outline-none font-light text-sm" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs md:text-sm font-semibold text-text-main uppercase tracking-widest">{t('contact.form.email')}</label>
                <input name="email" type="email" className="w-full px-3 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-primary transition-colors outline-none font-light text-sm" placeholder="john@example.com" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs md:text-sm font-semibold text-text-main uppercase tracking-widest">{t('contact.form.project')}</label>
                <div className="relative">
                  <select name="projectType" className="w-full px-3 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-primary transition-colors outline-none text-text-sub appearance-none cursor-pointer font-light text-sm">
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Development">Commercial Development</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-sm">expand_more</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs md:text-sm font-semibold text-text-main uppercase tracking-widest">{t('contact.form.message')}</label>
                <textarea name="message" rows={3} className="w-full px-3 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-primary transition-colors outline-none resize-none font-light text-sm" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-text-main hover:bg-primary text-white font-bold text-xs md:text-sm uppercase tracking-widest transition-all shadow-lg mt-4 group flex items-center justify-center gap-2">
                {t('contact.form.send')}
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </form>
        </div>
    );
};

export default QuoteForm;