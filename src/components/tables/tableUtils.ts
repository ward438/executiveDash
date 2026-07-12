export const filterTableRows = (rows: any[], search: string): any[] =>
    rows.filter((row) =>
        Object.values(row).some((val) =>
            String(val).toLowerCase().includes(search.toLowerCase())
        )
    );

export const rowStyler = (row: any): string =>
    row.cost > row.budget ? "bg-red-100" : "bg-green-100";
