import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

export default function CreateAlert({onSubmit}: {onSubmit : (keyword: string) => void}) {
  let [open, setOpen] = useState(false);
  let [keyword, setKeyword] = useState("");

  const handle = () => {
    setOpen(false)
    onSubmit(keyword)
  };

  // https://react.dev/learn/you-might-not-need-an-effect
  useEffect(() => { if (!open) setKeyword("") }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Criar Alerta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] top-[30%] translate-y-[-30%]">
        <DialogHeader>
          <DialogTitle>Criar Alerta</DialogTitle>
          <DialogDescription>
            Digite a palavra-chave de interesse
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3">
          <Input
            placeholder="Palavra-chave"
            autoFocus
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button onClick={(handle)}>Salvar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
