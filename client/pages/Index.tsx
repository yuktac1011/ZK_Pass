import Layout from "@/components/Layout";
import { MainLayout } from "@/components/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Index() {
  const activity = [
    {
      activity: "Credential issued to Sarah Lee",
      time: "2023-09-20 10:00 AM",
      status: "Completed",
    },
    {
      activity: "Credential issued to David Chen",
      time: "2023-09-19 03:00 PM",
      status: "Completed",
    },
    {
      activity: "Credential issued to Emily Wong",
      time: "2023-09-18 09:00 AM",
      status: "Pending",
    },
    {
      activity: "Credential issued to Michael Kim",
      time: "2023-09-17 02:00 PM",
      status: "Completed",
    },
    {
      activity: "Credential issued to Olivia Patel",
      time: "2023-09-16 08:00 AM",
      status: "Failed",
    },
  ];

  return (
    <Layout>
      <MainLayout>
        {/* Update the header title for this page */}
        <div className="p-4 sm:p-8">
          {/* Dashboard Content */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Section - Metrics */}
            <div className="flex-1">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-4 sm:p-6 shadow-sm">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-gray-500">
                      Total Credentials Issued
                    </p>
                    <div className="flex items-end justify-between">
                      <div className="space-y-1">
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                          1,234
                        </p>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-emerald-500">
                          <span className="font-medium">+12%</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-12 sm:h-16 opacity-50">
                      <svg
                        className="h-full w-full"
                        viewBox="0 0 200 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 50C20 20 40 25 60 35C80 45 100 40 120 20C140 0 160 5 180 30C200 55 200 30 200 30"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 sm:p-6 shadow-sm">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-gray-500">
                      Recent Revocations
                    </p>
                    <div className="flex items-end justify-between">
                      <div className="space-y-1">
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                          5
                        </p>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-red-500">
                          <span className="font-medium">+3 last week</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-12 sm:h-16 opacity-50">
                      <svg
                        className="h-full w-full"
                        viewBox="0 0 200 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 30C20 50 40 55 60 40C80 25 100 30 120 50C140 70 160 60 180 15C200 5 200 15 200 15"
                          stroke="#EF4444"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 sm:p-6 shadow-sm">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-gray-500">
                      Blockchain Status
                    </p>
                    <div className="flex items-end justify-between">
                      <div className="space-y-1">
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500">
                          Active
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">
                          Syncing...
                        </p>
                      </div>
                    </div>
                    <div className="relative h-12 sm:h-16 opacity-50">
                      <svg
                        className="h-full w-full"
                        viewBox="0 0 200 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 40L30 40L40 60L60 15L70 40L90 40L100 50L120 25L130 40L160 40"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Section - Quick Actions */}
            <div className="w-full lg:w-[250px] lg:flex-shrink-0">
              <Card className="p-4 sm:p-6 shadow-sm">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Quick Actions
                  </h3>

                  <div className="space-y-2 sm:space-y-3">
                    <Button className="w-full justify-start gap-2 sm:gap-3 bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                      Create Credential
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start gap-2 sm:gap-3 border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 text-sm sm:text-base"
                    >
                      <a
                        href="/blockchain/registry"
                        className="flex items-center w-full gap-2 sm:gap-3"
                      >
                        Register Blockchain
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-6 sm:mt-8">
            <Card className="shadow-sm overflow-hidden">
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  Recent Activity
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="text-left text-xs sm:text-sm text-gray-500">
                      <th className="px-3 sm:px-6 py-3 font-medium">Activity</th>
                      <th className="px-3 sm:px-6 py-3 font-medium">Timestamp</th>
                      <th className="px-3 sm:px-6 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {activity.map((row, i) => (
                      <tr key={i} className="text-xs sm:text-sm">
                        <td className="px-3 sm:px-6 py-3 text-gray-700 max-w-[200px] sm:max-w-none truncate">
                          {row.activity}
                        </td>
                        <td className="px-3 sm:px-6 py-3 text-gray-500">
                          {row.time}
                        </td>
                        <td className="px-3 sm:px-6 py-3">
                          {row.status === "Completed" && (
                            <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-600 px-2 sm:px-3 py-1 text-xs font-medium">
                              Completed
                            </span>
                          )}
                          {row.status === "Pending" && (
                            <span className="inline-flex items-center rounded-full bg-yellow-50 text-yellow-700 px-2 sm:px-3 py-1 text-xs font-medium">
                              Pending
                            </span>
                          )}
                          {row.status === "Failed" && (
                            <span className="inline-flex items-center rounded-full bg-red-50 text-red-600 px-2 sm:px-3 py-1 text-xs font-medium">
                              Failed
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </MainLayout>
    </Layout>
  );
}