import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { useState } from "react"

interface AddExpenseProps {
  isOpen: boolean
  onClose: () => void
}

const AddExpense = ({ isOpen, onClose }: AddExpenseProps) => {

  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [group, setGroup] = useState("")

  const handleSubmit = () => {
    console.log("Expense Added:", { amount, description, group })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            New Expense
          </DialogTitle>
          <DialogDescription>
            Enter the details of your new expense.
          </DialogDescription>
        </DialogHeader>

        <div>
          <div>
            <Label>Amount</Label>
            <Input type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>

          <div>
            <Label>Description</Label>
            <Input type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div>
            <Label>Group</Label>
            <Input type="text" placeholder="Enter group name" value={group} onChange={(e) => setGroup(e.target.value)} />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add expense</Button>
        </DialogFooter>
      </DialogContent>

    </Dialog >
  )
}

export default AddExpense
