import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface TableComponentProps<T> {
  data: T[];
  columns: ColumnsType<T>;
}

const TableComponent = <T extends Record<string, any>>({
  data,
  columns,
}: TableComponentProps<T>) => {
  return (
    <Table columns={columns} dataSource={data} rowKey={(item) => item.id} />
  );
};

export default TableComponent;
