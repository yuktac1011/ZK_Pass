import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    options?: string[];
}

interface DynamicFormFieldProps {
    field: FormField;
    value: any;
    onChange: (name: string, value: any) => void;
}

export function DynamicFormField({ field, value, onChange }: DynamicFormFieldProps) {
    const renderField = () => {
        switch (field.type) {
            case "text":
                return (
                    <Input
                        type="text"
                        placeholder={field.placeholder}
                        value={value || ""}
                        onChange={(e) => onChange(field.name, e.target.value)}
                        className="h-10"
                    />
                );

            case "email":
                return (
                    <Input
                        type="email"
                        placeholder={field.placeholder}
                        value={value || ""}
                        onChange={(e) => onChange(field.name, e.target.value)}
                        className="h-10"
                    />
                );

            case "number":
                return (
                    <Input
                        type="number"
                        placeholder={field.placeholder}
                        value={value || ""}
                        onChange={(e) => onChange(field.name, e.target.value)}
                        className="h-10"
                    />
                );

            case "date":
                return (
                    <Input
                        type="date"
                        placeholder={field.placeholder}
                        value={value || ""}
                        onChange={(e) => onChange(field.name, e.target.value)}
                        className="h-10"
                    />
                );

            case "select":
                return (
                    <Select onValueChange={(val) => onChange(field.name, val)} value={value}>
                        <SelectTrigger className="h-10">
                            <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                            <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                    </Select>
                );

            case "radio":
                return (
                    <RadioGroup
                        value={value}
                        onValueChange={(val) => onChange(field.name, val)}
                        className="flex flex-row space-x-4"
                    >
                        {field.options?.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`${field.name}-${option}`} />
                                <Label htmlFor={`${field.name}-${option}`} className="text-sm font-normal">
                                    {option}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                );

            case "checkbox":
                return (
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id={field.name}
                            checked={value || false}
                            onCheckedChange={(checked) => onChange(field.name, checked)}
                        />
                        <Label htmlFor={field.name} className="text-sm font-normal">
                            {field.label}
                        </Label>
                    </div>
                );

            default:
                return (
                    <Input
                        type="text"
                        placeholder={field.placeholder}
                        value={value || ""}
                        onChange={(e) => onChange(field.name, e.target.value)}
                        className="h-10"
                    />
                );
        }
    };

    return (
        <div className="space-y-2">
            {field.type !== "checkbox" && (
                <Label htmlFor={field.name} className="text-sm font-medium text-foreground">
                    {field.label}
                </Label>
            )}
            {renderField()}
        </div>
    );
}