import { useState } from "react";

interface BudgetAlertModalProps {
    row: any;
    onClose: () => void;
    onSave?: (alert: any) => void;
}

export const BudgetAlertModal = ({ row, onClose, onSave }: BudgetAlertModalProps) => {
    const [threshold, setThreshold] = useState<number | "">("");
    const [description, setDescription] = useState("");
    const [submittedAlert, setSubmittedAlert] = useState<{ threshold: number | ""; description: string } | null>(null);

    const alertChanged = !submittedAlert || threshold !== submittedAlert.threshold || description !== submittedAlert.description;

    const handleClose = () => {
        setSubmittedAlert(null);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-purple-100 p-4 rounded-md w-1/3 border flex flex-col gap-3">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-center border border-gray-300 p-1 rounded bg-white text-black">{row.account_name}</h2>
                    <div className="col-span-2 ...">
                        <span className="text-sm text-white">Create a new budget alert for this account</span>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-3 gap-4 mt-6">
                    <div className="row-span-3 grid grid-cols-[auto_1fr] gap-x-2 items-center">
                        <span className="text-sm text-white">Owner:</span>
                        <span className="border border-gray-300 p-1 rounded text-black bg-white">{row.owner}</span>

                        <span className="text-sm text-white">Service:</span>
                        <span className="border border-gray-300 p-1 rounded text-black bg-white">{row.service}</span>

                        <span className="text-sm text-white">Region:</span>
                        <span className="border border-gray-300 p-1 rounded text-black bg-white">{row.region}</span>

                        <span className="text-sm text-white">Cost:</span>
                        <span className="border border-gray-300 p-1 rounded text-black bg-white">{row.cost}</span>

                        <span className="text-sm text-white">Budget:</span>
                        <span className="border border-gray-300 p-1 rounded text-black bg-white">{row.budget}</span>
                    </div>
                    <div className="col-span-2 row-span-2 flex flex-col gap-3 p-3">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-white -mt-4.5">Threshold Amount</label>
                            <input
                                type="number"
                                placeholder="e.g. 1000"
                                value={threshold}
                                onChange={(e) => setThreshold(e.target.value === "" ? "" : Number(e.target.value))}
                                className="border border-gray-300 p-1 rounded text-black bg-white w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-white">Description <span className="text-gray-400 text-xs">(optional)</span></label>
                            <textarea
                                placeholder="e.g. Alert when S3 exceeds budget..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="border border-gray-300 p-1 rounded text-black bg-white w-full resize-none"
                                rows={3}
                            />
                        </div>
                        {submittedAlert && (
                            <div className="border border-gray-300 rounded bg-white/10 p-2 text-sm text-white mt-1">
                                <p><span className="font-semibold">Threshold:</span> {submittedAlert.threshold}</p>
                                {submittedAlert.description && <p><span className="font-semibold">Note:</span> {submittedAlert.description}</p>}
                                <p><span className="font-semibold">Account:</span> {row.account_name} — {row.service}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        className="px-3 py-1.5 border bg-warning-primary text-white rounded text-sm cursor-pointer hover:bg-warning-secondary/80 disabled:opacity-40 disabled:cursor-not-allowed"
                        onClick={() => {
                            const alert = { ...row, threshold, description };
                            setSubmittedAlert({ threshold, description });
                            onSave?.(alert);
                        }}
                        disabled={!alertChanged}
                    >
                        Create Alert
                    </button>
                    <button
                        className="cursor-pointer px-3 py-1 border rounded bg-warning-primary text-creamWhite-100 hover:bg-warning-secondary/80"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
