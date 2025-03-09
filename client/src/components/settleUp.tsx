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

import { useEffect, useState } from "react"

interface SettleUpProps {
  isOpen: boolean
  onClose: () => void
  defaultAmount?: string
  defaultPaidBy?: string
  defaultPaidTo?: string
}

const SettleUp = ({ isOpen, onClose, defaultAmount, defaultPaidBy, defaultPaidTo }: SettleUpProps) => {

  const [amount, setAmount] = useState(defaultAmount || "")
  const [paidBy, setPaidBy] = useState(defaultPaidBy || "")
  const [paidTo, setPaidTo] = useState(defaultPaidTo || "")

  useEffect(() => {
    setAmount(defaultAmount || "")
    setPaidBy(defaultPaidBy || "")
    setPaidTo(defaultPaidTo || "")
  }, [defaultAmount, defaultPaidBy, defaultPaidTo])

  const handleSubmit = () => {
    console.log("Settle up:", { amount, paidTo, paidBy })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Settle up expense
          </DialogTitle>
          <DialogDescription>
            Enter the details to settle up expense.
          </DialogDescription>
        </DialogHeader>

        <div>
          <div>
            <Label>Amount</Label>
            <Input type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>

          <div>
            <Label>Paid by</Label>
            <Input type="text" placeholder="Enter who paid" value={paidBy} onChange={(e) => setPaidBy(e.target.value)} />
          </div>

          <div>
            <Label>Paid to</Label>
            <Input type="text" placeholder="Enter paid to whom" value={paidTo} onChange={(e) => setPaidTo(e.target.value)} />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Settle Up</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SettleUp
