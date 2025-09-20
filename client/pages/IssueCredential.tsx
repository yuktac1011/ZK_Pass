import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";

export default function IssueCredential() {
  const [method, setMethod] = useState("direct");
  const [connection, setConnection] = useState("");
  const [accessibleUntil, setAccessibleUntil] = useState("");
  const [maxIssuance, setMaxIssuance] = useState("");

  const [errors, setErrors] = useState<{
    connection?: string;
    accessibleUntil?: string;
    maxIssuance?: string;
  }>({});

  const validate = () => {
    const err: typeof errors = {};
    if (method === "direct") {
      if (!connection.trim())
        err.connection = "Please provide a connection or identifier.";
    }
    if (method === "link") {
      if (accessibleUntil && isNaN(Date.parse(accessibleUntil))) {
        err.accessibleUntil = "Please provide a valid date (YYYY-MM-DD).";
      }
      if (maxIssuance && !/^\d+$/.test(maxIssuance)) {
        err.maxIssuance = "Must be a positive integer.";
      }
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  return (
    <Layout>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/credentials" className="text-gray-500 hover:text-gray-700">
            ←
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Issue Credential</h1>
        </div>

        <Card className="p-6 max-w-3xl">
          <h2 className="text-lg font-semibold text-gray-900">
            Credential Details
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Fill the details for the new credential you want to issue.
          </p>

          <div className="mt-6">
            <h3 className="text-md font-semibold text-gray-800 mb-3">
              Choose how to issue credential
            </h3>

            <div className="space-y-4">
              <label
                className={`block rounded-lg border ${method === "direct" ? "border-blue-300 ring-2 ring-blue-100" : "border-gray-200"} p-4`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="issueMethod"
                    value="direct"
                    checked={method === "direct"}
                    onChange={() => setMethod("direct")}
                    className="mt-1 h-4 w-4 text-blue-600"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">Direct issue</div>
                    <p className="text-sm text-gray-500">
                      Issue credentials directly using a known identifier -
                      connections with your organization or establish connection
                      with new identifiers.
                    </p>
                    <div className="mt-3">
                      <Input
                        placeholder="Select connection/Paste identifier"
                        value={connection}
                        onChange={(e) => setConnection(e.target.value)}
                      />
                      {errors.connection && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.connection}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </label>

              <label
                className={`block rounded-lg border ${method === "link" ? "border-blue-300 ring-2 ring-blue-100" : "border-gray-200"} p-4`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="issueMethod"
                    value="link"
                    checked={method === "link"}
                    onChange={() => setMethod("link")}
                    className="mt-1 h-4 w-4 text-blue-600"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">Credential link</div>
                    <p className="text-sm text-gray-500">
                      Anyone can access the credential with this link. You can
                      deactivate it at any time.
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-gray-500">
                          Accessible until
                        </label>
                        <div className="mt-1 flex items-center gap-2">
                          <Input
                            placeholder="YYYY-MM-DD"
                            value={accessibleUntil}
                            onChange={(e) => setAccessibleUntil(e.target.value)}
                          />
                          <Button variant="ghost" size="icon">
                            <Calendar className="h-4 w-4 text-gray-500" />
                          </Button>
                        </div>
                        {errors.accessibleUntil && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors.accessibleUntil}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-xs text-gray-500">
                          Set maximum issuance
                        </label>
                        <Input
                          placeholder="e.g. 1000"
                          value={maxIssuance}
                          onChange={(e) => setMaxIssuance(e.target.value)}
                        />
                        {errors.maxIssuance && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors.maxIssuance}
                          </p>
                        )}
                        <p className="text-xs text-gray-400 mt-1">Optional</p>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Link
                to="/credentials"
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700"
              >
                Previous
              </Link>
              <Button
                asChild
                onClick={(e) => {
                  e.preventDefault();
                  if (validate()) {
                    /* navigate to step2 */ window.location.href =
                      "/credentials/issue/step2";
                  }
                }}
              >
                <a className="px-6 py-2 bg-blue-600 text-white rounded-md">
                  Next step →
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
