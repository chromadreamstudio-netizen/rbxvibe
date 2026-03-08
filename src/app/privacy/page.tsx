export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto mt-10 text-slate-300 prose prose-invert">
      <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2 className="text-xl font-semibold text-emerald-400 mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">We do not collect personal data unnecessarily. We may use third-party tools like Google Analytics and AdSense which use cookies to serve relevant ads based on your browsing history.</p>

      <h2 className="text-xl font-semibold text-emerald-400 mt-6 mb-2">2. Google AdSense</h2>
      <p className="mb-4">Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. You can opt out of personalized advertising by visiting Google Ads Settings.</p>

      <h2 className="text-xl font-semibold text-emerald-400 mt-6 mb-2">3. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at support@rbxvibe.com.</p>
    </div>
  );
}