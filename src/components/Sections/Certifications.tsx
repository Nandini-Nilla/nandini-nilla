import React from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Jun 2024",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/NILLANANDINIVEERANAGALAKSHMI-0360/DF0E710B4D5FEDA0?sharingId=AF580A0A5B6CD800",
  },
  {
    id: 2,
    name: "OCI Generative AI Professional",
    issuer: "Oracle",
    date: " July 2024",
    credentialUrl: "#",
  },
  {
    id: 3,
    name: "Cloud Virtual Internship",
    issuer: " AICTE",
    date: "June 2024",
    credentialUrl:
      "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=2f2d8763fb299517502651b11c2c1355",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Certifications</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Industry-recognized credentials validating my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {cert.date}
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                <div className="flex items-center">
                  <Award size={16} className="text-blue-400 mr-2" />
                  <span className="text-sm text-gray-300">
                    Verified Certification
                  </span>
                </div>
                <a
                  href={cert.credentialUrl}
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
