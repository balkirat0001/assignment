import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck, Settings } from 'lucide-react';

const PrivacyPolicy = () => {
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
                <Shield className="w-12 h-12 text-primary-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information when you use our service.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Last updated: October 3, 2025
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#information-collection" className="text-primary-600 hover:text-primary-700">1. Information We Collect</a></li>
                <li><a href="#information-use" className="text-primary-600 hover:text-primary-700">2. How We Use Your Information</a></li>
                <li><a href="#information-sharing" className="text-primary-600 hover:text-primary-700">3. Information Sharing</a></li>
                <li><a href="#data-security" className="text-primary-600 hover:text-primary-700">4. Data Security</a></li>
                <li><a href="#data-retention" className="text-primary-600 hover:text-primary-700">5. Data Retention</a></li>
                <li><a href="#your-rights" className="text-primary-600 hover:text-primary-700">6. Your Rights</a></li>
                <li><a href="#cookies" className="text-primary-600 hover:text-primary-700">7. Cookies and Tracking</a></li>
                <li><a href="#changes" className="text-primary-600 hover:text-primary-700">8. Changes to Privacy Policy</a></li>
                <li><a href="#contact" className="text-primary-600 hover:text-primary-700">9. Contact Us</a></li>
              </ul>
            </div>

            {/* Privacy Content */}
            <div className="prose prose-gray max-w-none">
              
              {/* Section 1 */}
              <section id="information-collection" className="mb-8">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We collect information you provide directly to us, such as when you:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Create an account (name, email address, password)</li>
                      <li>Update your profile information</li>
                      <li>Create and manage tasks</li>
                      <li>Contact us for support</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Usage Information</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We automatically collect certain information when you use our service:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Device information (browser type, operating system)</li>
                      <li>Log information (access times, pages viewed, IP address)</li>
                      <li>Usage patterns and preferences</li>
                      <li>Performance and error data</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <div className="flex">
                      <Eye className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          <strong>Transparency:</strong> We only collect information that is necessary to provide and improve our service. We never sell your personal data to third parties.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="information-use" className="mb-8">
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our service</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze trends and usage patterns</li>
                    <li>Detect, investigate, and prevent fraudulent activity</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id="information-sharing" className="mb-8">
                <div className="flex items-center mb-4">
                  <UserCheck className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">3. Information Sharing</h2>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Service Providers</h3>
                      <p className="leading-relaxed">
                        We may share information with trusted service providers who assist us in operating our service, such as hosting providers and analytics services.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Legal Requirements</h3>
                      <p className="leading-relaxed">
                        We may disclose information when required by law or to protect our rights, safety, or the rights and safety of others.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Business Transfers</h3>
                      <p className="leading-relaxed">
                        In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of that transaction.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="data-security" className="mb-8">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">4. Data Security</h2>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-medium text-green-900 mb-2">Technical Measures</h3>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Encryption in transit and at rest</li>
                        <li>• Secure authentication protocols</li>
                        <li>• Regular security updates</li>
                        <li>• Access controls and monitoring</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-medium text-blue-900 mb-2">Organizational Measures</h3>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Employee training and access controls</li>
                        <li>• Regular security assessments</li>
                        <li>• Incident response procedures</li>
                        <li>• Data minimization practices</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          <strong>Important:</strong> While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="data-retention" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Account Information:</strong> Retained while your account is active and for a reasonable period after deletion.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Usage Data:</strong> Typically retained for up to 2 years for analytics and service improvement.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="your-rights" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium text-gray-900">Access</h3>
                        <p className="text-sm">Request access to your personal information</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Correction</h3>
                        <p className="text-sm">Request correction of inaccurate information</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Deletion</h3>
                        <p className="text-sm">Request deletion of your personal information</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium text-gray-900">Portability</h3>
                        <p className="text-sm">Request a copy of your data in a portable format</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Objection</h3>
                        <p className="text-sm">Object to certain processing of your information</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Restriction</h3>
                        <p className="text-sm">Request restriction of processing in certain circumstances</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="cookies" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We use cookies and similar tracking technologies to collect and use personal information about you. Our use of cookies and other tracking technologies includes:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Essential Cookies</h3>
                      <p className="leading-relaxed">
                        Required for basic site functionality, including user authentication and security features.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Analytics Cookies</h3>
                      <p className="leading-relaxed">
                        Help us understand how visitors interact with our service by collecting and reporting information anonymously.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Preference Cookies</h3>
                      <p className="leading-relaxed">
                        Remember your preferences and settings to provide a personalized experience.
                      </p>
                    </div>
                  </div>
                  
                  <p className="leading-relaxed">
                    You can control and manage cookies through your browser settings. However, disabling certain cookies may limit the functionality of our service.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="changes" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to Privacy Policy</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
                  </p>
                  <p className="leading-relaxed">
                    We encourage you to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="contact" className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    If you have any questions about this privacy policy or our privacy practices, please contact us:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> privacy@scalablewebapp.com</p>
                      <p><strong>Address:</strong> 123 Tech Street, Digital City, TC 12345</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Data Protection Officer:</strong> dpo@scalablewebapp.com</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  This privacy policy is designed to help you understand how we collect, use, and safeguard your information.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link 
                    to="/" 
                    className="btn-primary btn-md"
                  >
                    Back to App
                  </Link>
                  <Link 
                    to="/terms" 
                    className="btn-outline btn-md"
                  >
                    View Terms & Conditions
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

export default PrivacyPolicy;