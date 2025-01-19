import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import useSources from "@/hooks/useSources";
import { Alert } from "@/lib/types";
import { Label } from "./ui/label";

export default function CreateAlert({
  isEnabled,
  onSubmit,
}: {
  isEnabled: boolean;
  onSubmit: (alert: Alert) => void;
}) {
  let { sources } = useSources();
  let [open, setOpen] = useState(false);
  let [keyword, setKeyword] = useState("");
  let [sourceId, setSourceId] = useState("");

  const handle = () => {
    setOpen(false);
    onSubmit({ keyword, sourceId});
  };

  const reset = () => {
    setKeyword("");
    setSourceId("");
  }

  // https://react.dev/learn/you-might-not-need-an-effect
  useEffect(() => { if (!open) reset(); }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" disabled={!isEnabled}>
          Criar Alerta
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] top-[30%] translate-y-[-30%]">
        <DialogHeader>
          <DialogTitle className="text-center">Criar Alerta</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">

          <div className="my-5 space-y-2">
            <Label>Digite a palavra-chave de interesse</Label>
            <Input
              placeholder="Palavra-chave.."
              autoFocus
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <div className="my-5 space-y-2">
            <Label>Escolha o Diário Oficial</Label>
            <Select onValueChange={e => setSourceId(e)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sources?.filter(s => s.isOfficial).map((source) => (
                  <SelectItem key={source.id} value={source.id}>
                    {source.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handle} disabled={!sourceId || !keyword || keyword.length < 3} className="w-full">
            Criar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
