import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard, ExternalLink } from "lucide-react";

export default function BlockchainRegistry() {
  return (
    <Layout>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            ←
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Blockchain Registry
          </h1>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Manage your issuer's registration on the blockchain.
        </p>

        <div className="space-y-6 max-w-3xl">
          <Card className="p-6">
            <h3 className="font-semibold text-gray-800">Issuer Public Key</h3>
            <p className="text-sm text-gray-500 mt-2">
              0x4a56f82c7b9d1f3a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8b
            </p>
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" size="sm" className="gap-2">
                <Clipboard className="h-4 w-4" />
                Copy
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-gray-800">
              Blockchain Registration Status
            </h3>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-600 px-3 py-1 text-sm font-medium">
                  Active
                </span>
              </div>
              <div>
                <Button asChild variant="outline" size="sm">
                  <a href="#" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View on Blockchain
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-gray-800">
              Last Transaction Hash
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              0x7b3a9d1e5f2c4b8a9d8f7e6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a
            </p>
            <div className="mt-4 flex justify-end">
              <Button asChild variant="outline" size="sm">
                <a href="#" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View on Blockchain
                </a>
              </Button>
            </div>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-blue-600 text-white px-6 py-2">
              Register / Update on Blockchain
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
