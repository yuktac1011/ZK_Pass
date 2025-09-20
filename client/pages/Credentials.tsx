import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Edit3, Trash2 } from "lucide-react";

type Credential = {
  id: string;
  user: string;
  type: string;
  status: "Active" | "Revoked";
  issuedAt: string;
  expiresAt: string;
};

const SAMPLE: Credential[] = [
  {
    id: "#12345",
    user: "Emily Carter",
    type: "Driver's License",
    status: "Active",
    issuedAt: "2023-08-15",
    expiresAt: "2028-08-15",
  },
  {
    id: "#67890",
    user: "Liam Harper",
    type: "Passport",
    status: "Active",
    issuedAt: "2023-05-20",
    expiresAt: "2033-05-20",
  },
  {
    id: "#24680",
    user: "Olivia Bennett",
    type: "National ID",
    status: "Active",
    issuedAt: "2023-11-01",
    expiresAt: "2033-11-01",
  },
  {
    id: "#13579",
    user: "Noah Foster",
    type: "Driver's License",
    status: "Revoked",
    issuedAt: "2022-09-10",
    expiresAt: "2027-09-10",
  },
  {
    id: "#98765",
    user: "Ava Coleman",
    type: "Passport",
    status: "Active",
    issuedAt: "2023-02-28",
    expiresAt: "2033-02-28",
  },
  {
    id: "#11223",
    user: "Ethan Hayes",
    type: "National ID",
    status: "Active",
    issuedAt: "2023-07-05",
    expiresAt: "2033-07-05",
  },
];

export default function Credentials() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SAMPLE;
    return SAMPLE.filter(
      (c) =>
        c.id.toLowerCase().includes(q) ||
        c.user.toLowerCase().includes(q) ||
        c.type.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <Layout>
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Credentials</h1>
            <p className="text-sm text-gray-500">
              Manage and issue credentials to users
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search credentials..."
              className="max-w-md"
            />
            <Button asChild variant="default">
              <Link to="/credentials/issue">+ Issue Credential</Link>
            </Button>
          </div>
        </div>

        <Card className="mt-6 p-0">
          <div className="overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    Credential ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    Issued At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    Expires At
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {filtered.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {row.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {row.user}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {row.type}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${row.status === "Active" ? "bg-blue-50 text-blue-600" : "bg-red-50 text-red-600"}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {row.issuedAt}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {row.expiresAt}
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-gray-500">
                      <div className="flex items-center justify-end gap-3">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-3 bg-white border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing 1 to {filtered.length} of {SAMPLE.length} entries
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Previous
              </Button>
              <div className="px-3 py-1 rounded-md bg-blue-600 text-white">
                {page}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPage((p) => p + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
