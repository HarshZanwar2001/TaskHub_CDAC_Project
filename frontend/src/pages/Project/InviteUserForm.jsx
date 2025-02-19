import { Input } from "@/components/ui/input";
// import "./Login.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { inviteToProject } from "@/redux/Project/Project.Action";
import { useParams } from "react-router-dom";


const InviteUserForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      
    },
  });
  const onSubmit = (data) => {
    dispatch(inviteToProject({email:data.email,projectId:id}));
    
    console.log("sent invitation", data);

  };
  return (
    <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="border w-full border-gray-700 py-5 px-5"
                          placeholder="enter user email"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-slate-400 py-5">
                  SENT INVITATION
                </Button>
              </form>
            </Form>

         
          </div>
  );
};

export default InviteUserForm;
