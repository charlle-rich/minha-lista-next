import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus , List, CircleCheckBig, BadgeAlert,SquarePen,Trash2, ListCheck, Sigma } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";





const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
     <Card className="w-lg p-4">
      <CardHeader className="flex gap-2">
      <Input placeholder="Adicionar tarefa"/>
      <Button className="cursor-pointer"><Plus />Cadastrar</Button>
      </CardHeader>
      
    <CardContent>
      <Separator className="mb-4"/>

       <div className="flex gap-2">
        <Badge className="cursor-pointer" variant="default"><List/>Todas</Badge>
        <Badge className="cursor-pointer" variant="outline"><BadgeAlert/>Não Finalizadas</Badge>
        <Badge className="cursor-pointer" variant="outline"><CircleCheckBig/>Concluidas</Badge>
       </div>

       <div className="mt-4 border-b-0">

         <div className="h-14 flex justify-between items-center border-b-1 border-t-1">
          <div className="w-2 h-full bg-green-300"></div>
          <p className="flex-1 px-2 text-sm">Estudar React</p>
          <div className="flex gap-2 items-center">
            <Dialog>
          <DialogTrigger asChild>
            <SquarePen size={16} className="cursor-pointer"/>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar tarefa</DialogTitle>
            </DialogHeader>
          
          <div className="flex gap-2">
            <Input placeholder="Editar tarefa"/>
            <Button className="cursor-pointer">Editar</Button>
          </div>
           
          </DialogContent>
        </Dialog>
            <Trash2 size={16} className="cursor-pointer"/>
          </div>
         </div>   
        
        </div>

        

        <div className="flex justify-between mt-2">
          <div className="flex gap-2 items-center">
            <ListCheck/>
          <p className="texte-xm">Tarefas concluidas (3/3)</p>
          </div>
                  <AlertDialog>
  <AlertDialogTrigger asChild>
    <Button className="text-xs h-8 cursor-pointer" variant="outline"><Trash2/>  Limpar tarefas concluidas</Button>
    </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Tem certeza que deseja excliur x itens?</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction>Sim</AlertDialogAction>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
         </div>

         <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
          <div className="h-full  bg-green-500 rounded-md" style={{width: "50%"}}></div>
         </div>

         <div className="flex justify-end items-center gap-2 mt-2">
          <Sigma size={18}/>
         <p className="text-xs">3 Tarefas no total</p>
         </div>

        
      </CardContent>


</Card>
    </main>
  )
}

export default (Home)