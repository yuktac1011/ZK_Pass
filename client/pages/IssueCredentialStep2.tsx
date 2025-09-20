import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DynamicFormField } from "@/components/DynamicFormField";
import { useState } from "react";
import { ChevronLeft, ExternalLink } from "lucide-react";
import schemaData from "@/components/data/data.json";

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
}

interface SchemaData {
  schemas: Record<string, FormField[]>;
}

export default function IssueCredentialStep2() {
  const [selectedSchema, setSelectedSchema] = useState<string>("");
  const [formData, setFormData] = useState<Record<string, any>>({});
  
  const schemas = (schemaData as SchemaData).schemas;
  const schemaNames = Object.keys(schemas);
  const currentFields = selectedSchema ? schemas[selectedSchema] || [] : [];

  const handleFieldChange = (name: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!selectedSchema) {
      alert("Please select a schema type");
      return;
    }
    
    console.log("Form Data:", formData);
    console.log("Schema:", selectedSchema);
    
    // Navigate to success or next step
    window.location.assign("/credentials");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/credentials/issue"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Back</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Issue Credential</h1>
        </div>

        {/* Main Card */}
        <Card className="p-8 shadow-lg border-0 bg-card/95 backdrop-blur-sm">
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Credential Details</h2>
              <p className="text-muted-foreground">
                A credential is issued with assigned attribute values and can be issued directly to identifier or as a credential link containing a QR code.
              </p>
            </div>

            {/* Recipient Identifier */}
            <div className="space-y-3">
              <h3 className="font-medium text-foreground">Recipient Identifier:</h3>
              <div className="p-3 bg-muted/50 rounded-lg border">
                <code className="text-sm text-muted-foreground font-mono break-all">
                  did:iden3:polygon:main:wjTF46XA7ZPRYgJMshRNYwRFGcm6BkcAm89sZq
                </code>
              </div>
            </div>

            {/* Schema Selection */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Select schema type</h3>
                <Select value={selectedSchema} onValueChange={setSelectedSchema}>
                  <SelectTrigger className="h-12 text-left">
                    <SelectValue placeholder="Choose a schema type" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {schemaNames.map((schema) => (
                      <SelectItem key={schema} value={schema}>
                        {schema}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Dynamic Form Fields */}
            {selectedSchema && currentFields.length > 0 && (
              <div className="space-y-6">
                <div className="border-t pt-6">
                  <h3 className="font-medium text-foreground mb-4">
                    Schema Fields - {selectedSchema}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentFields.map((field) => (
                      <DynamicFormField
                        key={field.name}
                        field={field}
                        value={formData[field.name]}
                        onChange={handleFieldChange}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Proof Type Section */}
            {selectedSchema && (
              <div className="border-t pt-6 space-y-4">
                <h3 className="font-medium text-foreground">Proof type</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="space-y-1">
                      <p className="font-medium text-green-800 dark:text-green-200">
                        Signature-based (BJJSignature2021)
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Credential signed by the issuer using a BJJ private key
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="space-y-1">
                      <p className="font-medium text-blue-800 dark:text-blue-200">
                        Merkle Tree Proof (Iden3SparseMerkleTreeProof)
                      </p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Credential will be added to the issuer's state tree. The state transition involves an on-chain transaction and gas fees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Revocation Status */}
            {selectedSchema && (
              <div className="space-y-4">
                <h3 className="font-medium text-foreground">Revocation status</h3>
                <Select defaultValue="no-revocation">
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-revocation">Choose revocation status</SelectItem>
                    <SelectItem value="revocable">Revocable</SelectItem>
                    <SelectItem value="non-revocable">Non-revocable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Refresh Service */}
            {selectedSchema && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-foreground">Refresh Service</h3>
                  <Link to="#" className="text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">Display Method</p>
              </div>
            )}

            {/* Credential Expiration */}
            {selectedSchema && (
              <div className="space-y-4">
                <h3 className="font-medium text-foreground">Credential expiration date</h3>
                <input
                  type="date"
                  className="h-12 px-3 rounded-md border border-input bg-background text-foreground w-full md:w-auto"
                  placeholder="Select date"
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Link to="/credentials/issue">
                <Button variant="outline" className="px-6">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous step
                </Button>
              </Link>
              
              <Button 
                onClick={handleSubmit}
                className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={!selectedSchema}
              >
                Issue credential directly
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}