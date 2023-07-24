"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import FormComponent from "@components/form.component";

function UpdatePrompt() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    async function getPromptDetails() {
      const response = await fetch(`/api/prompt/update/${promptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    }

    if (promptId) getPromptDetails();
  }, [promptId]);

  async function handleUpdatePrompt(e) {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("PromptId not found!");

    try {
      const response = await fetch(`/api/prompt/update/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <FormComponent
        type="Update"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={handleUpdatePrompt}
      />
    </>
  );
}

export default UpdatePrompt;
