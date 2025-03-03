
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const DisclaimerSection = () => {
  return (
    <section className="py-10 bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white border border-medical-100 rounded-xl p-6 shadow-soft">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <AlertTriangle className="h-8 w-8 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Medical Disclaimer</h3>
              <p className="text-neutral-600 mb-3">
                Doctor GPT is an AI-powered tool designed for informational purposes only. The information provided by this application does not constitute medical advice, diagnosis, or treatment.
              </p>
              <p className="text-neutral-600 mb-3">
                Always consult with qualified healthcare professionals regarding any medical conditions, symptoms, treatments, or health-related questions. Never disregard professional medical advice or delay seeking it because of information provided by Doctor GPT.
              </p>
              <p className="text-neutral-600 font-medium">
                In case of a medical emergency, call your doctor or emergency services immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
