import {Pagination} from "@nextui-org/react";

export default function Paginations() {
  return (
    <div className="p-4 items-center flex justify-center">
        <Pagination color="primary" initialPage={2} total={2} />
    </div>
    
  );
}
