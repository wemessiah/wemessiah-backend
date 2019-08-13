import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { name, email, belong = "", rank = "" } = args;
      // belong, rank는 필수요소가 아니기 때문에 null type이 들어오는걸 방지하기 위해 공백 추가
      const user = await prisma.createUser({ name, email, belong, rank });
      return user;
    }
  }
};
