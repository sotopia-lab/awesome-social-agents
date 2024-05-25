import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import { Badge } from "@/components/ui/badge"
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { DataTableFacetedFilter } from "./ui/data-table-faceted-filter"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

import {
  data, Paper
} from "./papers"
import Link from "next/link"

import { options } from "./data/data"

const renderCell = (row: Row<Paper>, row_name: string, backgroundColor:string, backgroundColorDark:string) => {
  const environments:string = row.getValue(row_name);
  const environmentList = environments.split(",").map(environment => environment.trim()).sort();
  return (
    <div className="flex flex-wrap">
      {environmentList.map((environment, index) => (
        <div key={index} className={`rounded-full bg-clip-border ${backgroundColor} dark:${backgroundColorDark} m-1 px-2 py-1`}>
          {environment.trim()}
        </div>
      ))}
    </div>
  );
};

export const columns: ColumnDef<Paper>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <Link href={`${row.getValue("url")}`} className="text-blue-500 hover:text-blue-700">
          <div className="">{row.getValue("title")}
        </div></Link>
      ),
    },
    {
      accessorKey: "authors",
      header: "Authors",
      cell: ({ row }) => (
        <div className="">{row.getValue("authors")}</div>
      ),
    },
    
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Time
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      sortingFn: (rowA, rowB) => {
        const dateA: string = rowA.getValue("date");
        const dateB: string = rowB.getValue("date");
        const monthA = parseInt(dateA.split("/")[0], 10);
        const monthB = parseInt(dateB.split("/")[0], 10);
        const yearA = parseInt(dateA.split("/")[1], 10);
        const yearB = parseInt(dateB.split("/")[1], 10);
    
        if (yearA === yearB) {
          return monthA - monthB;
        }
        return yearA - yearB;
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("date")}</div>,
    },
    {
      accessorKey: "environments",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Environments
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        return renderCell(row, "environments", "bg-lime-200", "bg-lime-500")
      },
    },
    {
      accessorKey: "agents",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Agents
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        renderCell(row, "agents", "bg-violet-200", "bg-violet-500")
      ),
    },
    {
      accessorKey: "evaluation",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Evaluation
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        renderCell(row, "evaluation", "bg-sky-200", "bg-sky-500")
      ),
    },
    {
      accessorKey: "other",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Other
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        renderCell(row, "other", "bg-rose-200", "bg-rose-500")
      ),
    },
    {
      accessorKey: "subsection",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Subsection
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        row.getValue("subsection")
      ),
    },
    {
      accessorKey: "url",
      header: "URL",
      cell: ({ row }) => (
        <Link href={`${row.getValue("url")}`}><div className="">{row.getValue("url")}</div></Link>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const paper = row.original
   
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(paper.bibtex)}
              >
                Copy bibtex
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(paper.url)}
                >
                  Copy URL
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View authors</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: 'date', desc: true }  // This sets the default sorting to descending on the 'date' column
  ]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const [filterInput, setFilterInput] = React.useState<string>("")
  
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  React.useEffect(() => {
    table.getColumn("agents")?.toggleVisibility(false) ?? {};
    table.getColumn("evaluation")?.toggleVisibility(false) ?? {};
    table.getColumn("other")?.toggleVisibility(false) ?? {};
    table.getColumn("url")?.toggleVisibility(false) ?? {};
    table.getColumn("subsection")?.toggleVisibility(false) ?? {};
  }, [])
  
  return (
    <div className="w-full">
      <div className="flex flex-row">
        <div className="flex py-4 space-x-2">
          <Input
            placeholder="Filter across all columns ..."
            value={(filterInput as string) ?? ""}
            onChange={(event) => {
                setFilterInput(event.target.value);
                table.setGlobalFilter(event.target.value);
              }
            }
            className="max-w-lg"
          />
          {/* {table.getColumn("agents") && (
            <DataTableFacetedFilter
              column={table.getColumn("agents")}
              title="Filter by tags"
              options={options}
            />
          )} */}
        </div>
        <div className="py-4 ml-auto pl-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}