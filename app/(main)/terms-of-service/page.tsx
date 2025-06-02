import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Axel Web Technologies",
  description: "Our terms of service outline the rules and guidelines for using our services and website.",
}

export default function TermsOfServicePage() {
  return (
    <main className="container py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">Last updated: May 18, 2024</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Axel Web Technologies. These terms and conditions outline the rules and regulations for the use
            of our website and services.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use
            our website if you do not accept all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. License to Use Website</h2>
          <p>
            Unless otherwise stated, Axel Web Technologies and/or its licensors own the intellectual property rights for
            all material on this website. All intellectual property rights are reserved.
          </p>
          <p>
            You may view and/or print pages from the website for your own personal use subject to restrictions set in
            these terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Publishing any website material in any other media</li>
            <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
            <li>Publicly performing and/or showing any website material</li>
            <li>Using this website in any way that is or may be damaging to this website</li>
            <li>Using this website in any way that impacts user access to this website</li>
            <li>
              Using this website contrary to applicable laws and regulations, or in a way that causes, or may cause,
              harm to the website, or to any person or business entity
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your Content</h2>
          <p>
            In these terms and conditions, "Your Content" shall mean any audio, video, text, images or other material
            you choose to display on this website. By displaying Your Content, you grant Axel Web Technologies a
            non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt,
            publish, translate and distribute it in any and all media.
          </p>
          <p>
            Your Content must be your own and must not be infringing on any third party's rights. Axel Web Technologies
            reserves the right to remove any of Your Content from this website at any time without notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. No Warranties</h2>
          <p>
            This website is provided "as is," with all faults, and Axel Web Technologies makes no express or implied
            representations or warranties, of any kind related to this website or the materials contained on this
            website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall Axel Web Technologies, nor any of its officers, directors and employees, be held liable
            for anything arising out of or in any way connected with your use of this website, whether such liability is
            under contract, tort or otherwise.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent Axel Web Technologies from and against any and all liabilities,
            costs, demands, causes of action, damages and expenses (including reasonable attorney's fees) arising out of
            or in any way related to your breach of any of the provisions of these terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law & Jurisdiction</h2>
          <p>
            These terms will be governed by and construed in accordance with the laws of the state, and you submit to
            the non-exclusive jurisdiction of the state courts for the resolution of any disputes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p className="mt-4">
            <strong>Email:</strong> legal@axelweb.com
            <br />
            <strong>Phone:</strong> +1 (555) 123-4567
            <br />
            <strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345
          </p>
        </div>
      </div>
    </main>
  )
}
