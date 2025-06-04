import { Button } from "./components/ui/button";
import { Form, FormControl, FormField, FormItem } from "./components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

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
    <div className="col-auto mt-10 gap-y-10" id="contact">
      <div className="ml-[-6.1rem] flex gap-y-3">
        <span className="mr-5 text-primary">_______________________</span>
        <h2 className="text-2xl font-bold">Contacts</h2>
      </div>
      <div className="grid grid-cols-[50%_50%] px-20 py-20">
        <div className="col-auto gap-y-3">
          <h2 className="mb-[3rem] text-5xl font-bold">
            Have a project?
            <br className="mb-3" />
            {"Let's Talk!"}
          </h2>
          <Button size="lg">Submit</Button>
        </div>
        <div className="col-auto gap-y-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-3"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="h-30 resize-none"
                        placeholder="Message"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
