export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm space-y-6 mb-8 text-gray-400">
          <p>
            Please note that the information we provide is not intended to replace consultation with a qualified medical professional. We encourage you to inform your physician of changes you make to your lifestyle and discuss these with him or her. For questions or concerns about any medical conditions you may have, please contact your doctor.
          </p>
          <p>
            Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products.
          </p>
          <p>
            The website's content and the product for sale is based upon the author's opinion and is provided solely on an "AS IS" and "AS AVAILABLE" basis. You should do your own research and confirm the information with other sources when searching for information regarding health issues and always review the information carefully with your professional health care provider before using any of the protocols presented on this website and/or in the product sold here.
          </p>
          <p>
            Buygoods is the retailer of products on this site. BUYGOODS® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 South Entertainment Ave, Suite 410, Boise, Idaho, 83709, USA and used by permission. Buygood's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products. *For international shipping (outside of the United States), shipping fees will apply.
          </p>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p>© Copyright 2026 - CitrusBurn All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
