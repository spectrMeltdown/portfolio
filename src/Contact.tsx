import { Button } from "./components/ui/button";
import { Form } from "./components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default Contact;

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().min(2).max(100),
  message: z.string().min(2).max(500),
});

function Contact() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(`values are: ${Object.entries(values)}`);
  }

  return (
    <div className="col-auto gap-y-5">
      <div className="flex gap-y-3">
        <span className="text-primary">_______________</span>
        <h2 className="text-xl">Contacts</h2>
      </div>
      <div className="grid grid-cols-[50%_50%] py-20">
        <div className="col-auto gap-y-3">
          <h2 className="mb-5 text-4xl font-bold">
            {"Have a project?\nLet's Talk!"}
          </h2>
          <Button>Submit</Button>
        </div>
        <div className="col-auto gap-y-3">
          <Form {...form}>{/* <FormField></FormField> */}</Form>
        </div>
      </div>
    </div>
  );
}
