"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { PlusIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProviderColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ProviderClientProps {
  data: ProviderColumn[];
}

export const ProviderClient: React.FC<ProviderClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Proveedores (${data?.length})`}
          description="Administra tus proveedores"
        />
        <Button
          onClick={() => router.push(`/${params.store_id}/providers/new`)}
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Agregar
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading
        title="API"
        description="Llamadas a la API para los proveedores"
      />
      <Separator />
      <ApiList entityName="providers" entityIdName="provider_id" />
    </>
  );
};