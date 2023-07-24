"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import ProfileComponent from "@components/profile.component";

function Profile() {
  const { data: session } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState([]);
  function handleEdit(post) {
    router.push(`/update/prompt?id=${post._id}`);
  }
  async function handleDelete(post) {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?",
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/update/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((item) => item.id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.error(error);
      }
    }
    if (hasConfirmed) {
      try {
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    }

    if (session?.user.id) fetchPosts();
  }, []);

  return (
    <ProfileComponent
      name="Name"
      description="description"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default Profile;
