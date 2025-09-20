import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const DATA = [
  {
    type: "SignatureVerificationSchema",
    version: "1.0",
    importedAt: "2025-09-27 11:50",
  },
  { type: "Membership", version: "1.0", importedAt: "2025-09-26 08:45" },
  {
    type: "UniquenessCredential",
    version: "0.01",
    importedAt: "2025-09-18 16:30",
  },
  { type: "BasicPerson", version: "1.4.3", importedAt: "2025-09-17 14:25" },
  { type: "POAP01", version: "0.9", importedAt: "2025-09-16 10:15" },
  { type: "BoardMember", version: "3.0", importedAt: "2025-09-12 13:33" },
  { type: "EmployeeID", version: "1.2", importedAt: "2025-09-10 09:19" },
  { type: "StudentID", version: "1.0", importedAt: "2025-09-09 07:40" },
  { type: "KYCLevel1", version: "1.1", importedAt: "2025-09-07 06:07" },
];

export default function Schemas() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return DATA;
    return DATA.filter((r) => r.type.toLowerCase().includes(s));
  }, [q]);

  return (
    <Layout>
      <div className="p-8 space-y-6">
        {/* Top actions */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Schemas</h1>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline">
              <Link to="/credentials/issue">Issue credential</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Import schema
            </Button>
          </div>
        </div>

        {/* Info banner (blue palette) */}
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between bg-blue-600 text-white px-6 py-5">
            <div>
              <div className="font-semibold">Credential schemas explained</div>
              <p className="text-sm opacity-90">
                Learn about schema types, attributes, naming conventions, data
                types and more.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                Learn more
              </Button>
              <Button
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                Demos
              </Button>
            </div>
          </div>
        </Card>

        {/* List header */}
        <div className="flex items-center justify-between">
          <div className="text-gray-600 text-sm">
            Schemas{" "}
            <span className="ml-1 rounded bg-gray-100 px-2 py-0.5 text-xs">
              {filtered.length}
            </span>
          </div>
          <div className="w-[360px]">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search schemas, attributes..."
            />
          </div>
        </div>

        {/* Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="px-6 py-3 font-medium">Schema type</th>
                  <th className="px-6 py-3 font-medium">Schema version</th>
                  <th className="px-6 py-3 font-medium">Import date</th>
                  <th className="px-6 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((row) => (
                  <tr key={row.type} className="text-sm hover:bg-gray-50">
                    <td className="px-6 py-3 text-blue-600 font-medium">
                      {row.type}
                    </td>
                    <td className="px-6 py-3 text-gray-700">{row.version}</td>
                    <td className="px-6 py-3 text-gray-500">
                      {row.importedAt}
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-4">
                        <Link
                          to="#"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Details
                        </Link>
                        <Link
                          to="/credentials/issue/step2"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Issue
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
