import { Button } from "@/components/ui/button";
import { AArrowUp } from 'lucide-react';

const Homepage = () => {
  return (
    <div className = 'h-screen flex items-center justify-center'>
      <Button size = "xs" className ="rounded-full text-custom-color">
        <AArrowUp /> Hello, World!</Button>
    </div>
  )
}

export default Homepage;