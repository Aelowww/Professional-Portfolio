import { redirect } from "next/navigation";

// Skills now live in the Stack section on the home page.
export default function SkillsPage() {
  redirect("/#stack");
}
