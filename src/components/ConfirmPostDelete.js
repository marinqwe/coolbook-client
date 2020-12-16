import React, { useState } from "react";
import {
  ButtonGroup,
  DarkButton,
  BlueButton,
  StyledConfirmDelete,
  Title,
} from "../styles";

function ConfirmPostDelete({
  onPostDeleteConfirm,
  postId,
  setDeletingPost,
}) {
  const [loading, setLoading] = useState(false);
  const confirmDelete = async (id) => {
    setLoading(true);
    await onPostDeleteConfirm(id);
    setLoading(false);
  };

  return (
    <StyledConfirmDelete>
      <Title>{loading ? "Deleting post..." : "Delete this post?"}</Title>
      <div>
        <ButtonGroup>
          <BlueButton onClick={() => confirmDelete(postId)}>Confirm</BlueButton>
          <DarkButton onClick={() => setDeletingPost(false)}>Cancel</DarkButton>
        </ButtonGroup>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmPostDelete;
