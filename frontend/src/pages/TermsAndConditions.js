import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, Database, AlertTriangle, Scale } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-8 py-10">
            {/* Title */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <Scale className="w-12 h-12 text-primary-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Terms and Conditions
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Please read these terms and conditions carefully before using our scalable web application service.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Last updated: October 3, 2025
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#acceptance" className="text-primary-600 hover:text-primary-700">1. Acceptance of Terms</a></li>
                <li><a href="#description" className="text-primary-600 hover:text-primary-700">2. Description of Service</a></li>
                <li><a href="#user-accounts" className="text-primary-600 hover:text-primary-700">3. User Accounts</a></li>
                <li><a href="#acceptable-use" className="text-primary-600 hover:text-primary-700">4. Acceptable Use Policy</a></li>
                <li><a href="#privacy" className="text-primary-600 hover:text-primary-700">5. Privacy and Data Protection</a></li>
                <li><a href="#intellectual-property" className="text-primary-600 hover:text-primary-700">6. Intellectual Property</a></li>
                <li><a href="#limitation" className="text-primary-600 hover:text-primary-700">7. Limitation of Liability</a></li>
                <li><a href="#termination" className="text-primary-600 hover:text-primary-700">8. Termination</a></li>
                <li><a href="#changes" className="text-primary-600 hover:text-primary-700">9. Changes to Terms</a></li>
                <li><a href="#contact" className="text-primary-600 hover:text-primary-700">10. Contact Information</a></li>
              </ul>
            </div>

            {/* Terms Content */}
            <div className="prose prose-gray max-w-none">
              
              {/* Section 1 */}
              <section id="acceptance" className="mb-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using this scalable web application ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and our company ("we," "us," or "our"), concerning your access to and use of the Service.
                </p>
              </section>

              {/* Section 2 */}
              <section id="description" className="mb-8">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">2. Description of Service</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our Service is a scalable web application that provides:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>User authentication and account management</li>
                  <li>Task management and organization tools</li>
                  <li>Personal dashboard and analytics</li>
                  <li>Data storage and synchronization</li>
                  <li>Real-time updates and notifications</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.
                </p>
              </section>

              {/* Section 3 */}
              <section id="user-accounts" className="mb-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">3. User Accounts</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Account Creation</h3>
                    <p className="leading-relaxed">
                      To access certain features of our Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Account Security</h3>
                    <p className="leading-relaxed">
                      You are responsible for safeguarding the password and all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Account Termination</h3>
                    <p className="leading-relaxed">
                      We reserve the right to terminate or suspend your account at any time for violations of these Terms or for any other reason at our sole discretion.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="acceptable-use" className="mb-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">4. Acceptable Use Policy</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Violate any applicable federal, state, local, or international law or regulation</li>
                  <li>Transmit or procure the sending of any advertising or promotional material without our prior written consent</li>
                  <li>Impersonate or attempt to impersonate the company, another user, or any other person or entity</li>
                  <li>Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                  <li>Use the Service in any manner that could disable, overburden, damage, or impair the Service</li>
                  <li>Use any robot, spider, or other automatic device to access the Service for any purpose without our express written permission</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="privacy" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Your privacy is important to us. We collect and use your personal information in accordance with our Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          <strong>Data Security:</strong> We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="leading-relaxed">
                    By using our Service, you consent to the collection and use of information in accordance with our Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="intellectual-property" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors. The Service is protected by copyright, trademark, and other laws.
                  </p>
                  <p className="leading-relaxed">
                    Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="limitation" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <div className="flex">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Important:</strong> Please read this section carefully as it limits our liability to you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                  </p>
                  <p className="leading-relaxed">
                    We do not warrant that the Service will be uninterrupted, timely, secure, or error-free.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="termination" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Termination</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                  <p className="leading-relaxed">
                    If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="changes" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p className="leading-relaxed">
                    What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="contact" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> legal@scalablewebapp.com</p>
                      <p><strong>Address:</strong> #12345</p>
                      <p><strong>Phone:</strong> +91xxxxxxx7</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  By using our Service, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link 
                    to="/" 
                    className="btn-primary btn-md"
                  >
                    I Accept - Continue to App
                  </Link>
                  <Link 
                    to="/privacy" 
                    className="btn-outline btn-md"
                  >
                    View Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;