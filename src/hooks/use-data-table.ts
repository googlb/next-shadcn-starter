'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState, useTransition } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

interface UseDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageCount: number;
}

export function useDataTable<TData, TValue>({ columns, data, pageCount }: UseDataTableProps<TData, TValue>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Get initial state from URL
  const page = searchParams.get('page') ?? '1';
  const pageSize = searchParams.get('pageSize') ?? '10';
  const sort = searchParams.get('sort');
  const globalFilter = searchParams.get('filter') ?? '';

  // Memoize table state to prevent re-renders
  const [{ pageIndex, pageSize: pSize }, setPagination] = useState<PaginationState>({
    pageIndex: Number(page) - 1,
    pageSize: Number(pageSize),
  });

  const pagination = useMemo(() => ({ pageIndex, pageSize: pSize }), [pageIndex, pSize]);

  const [sorting, setSorting] = useState<SortingState>(
    sort ? [{ id: sort.split('.')[0], desc: sort.split('.')[1] === 'desc' }] : []
  );

  // Create URL query string
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(pageIndex + 1));
    params.set('pageSize', String(pSize));
    params.set('sort', sorting[0]?.id ? `${sorting[0].id}.${sorting[0].desc ? 'desc' : 'asc'}` : '');
    // Debounced filter update is handled separately

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }, [pageIndex, pSize, sorting, pathname, router, searchParams]);

  // Handle global filter with debounce
  const [filter, setFilter] = useState(globalFilter);
  useEffect(() => {
    const timeout = setTimeout(() => {
        const params = new URLSearchParams(searchParams);
        params.set('filter', filter);
        startTransition(() => {
            router.replace(`${pathname}?${params.toString()}`);
        });
    }, 500);

    return () => clearTimeout(timeout);
  }, [filter, pathname, router, searchParams]);

  const table = useReactTable({
    data,
    columns,
    pageCount: pageCount ?? -1,
    state: {
      pagination,
      sorting,
      globalFilter: filter,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
  });

  return { table, isPending };
}
