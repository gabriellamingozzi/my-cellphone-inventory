import { useEffect, useState } from "react";

type SortOrder = "asc" | "desc";

function parseStorageValue(value: string): number {
  if (!value) return 0;

  const match = value.trim().match(/^([\d.]+)\s*(TB|GB|MB)?$/i);
  if (!match) return 0;

  const num = parseFloat(match[1]);
  const unit = match[2]?.toUpperCase() ?? "GB"; // default to GB if missing

  switch (unit) {
    case "TB":
      return num * 1024;
    case "GB":
      return num;
    case "MB":
      return num / 1024;
    default:
      return num;
  }
}

export const useSortableTable = <T extends Record<string, any>>(data: T[]) => {
  const [tableData, setTableData] = useState<T[]>([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleSorting = (sortField: any, sortOrder: SortOrder) => {
    if (!sortField) return;

    const sorted = [...tableData].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];

      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;

      // Handle storage fields like "1TB", "512GB"
      if (sortField === 'storage') {
        const aParsed = parseStorageValue(aVal);
        const bParsed = parseStorageValue(bVal);
        return (aParsed - bParsed) * (sortOrder === "asc" ? 1 : -1);
      }

      // Handle pure numeric
      if (!isNaN(Number(aVal)) && !isNaN(Number(bVal))) {
        return (Number(aVal) - Number(bVal)) * (sortOrder === "asc" ? 1 : -1);
      }

      // Fallback to string sort
      return aVal
        .toString()
        .localeCompare(bVal.toString(),undefined, { sensitivity: 'base' }) * (sortOrder === "asc" ? 1 : -1);
    });

    setTableData(sorted);
  };

  return [tableData, handleSorting] as const;
};
