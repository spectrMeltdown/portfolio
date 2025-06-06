import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "./components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/utils";
import { contactSchema, type ContactFormData } from "@/lib/types";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default Contact;

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      time: new Date(),
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsLoading(true);
    console.log(`values are: ${Object.entries(values)}`);
    const result = await sendEmail(values);
    if (result) {
      toast("Email sent! I'll respond as soon as I can!", {
        icon: <FontAwesomeIcon icon={faCheckCircle} color="green" />,
      });
    } else {
      toast("Sorry, an unknown error occured..", {
        icon: <FontAwesomeIcon icon={faXmarkCircle} color="red" />,
      });
    }
    setIsLoading(false);
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
          <Button
            variant={isLoading ? "secondary" : "default"}
            size="lg"
            form="contactForm"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2Icon className="animate-spin" /> {"Please wait"}
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
        <div className="col-auto gap-y-3">
          <Form {...form}>
            <form
              id="contactForm"
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
