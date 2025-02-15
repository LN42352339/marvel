import { Post } from "../../models/Post"

export const UpdatePostUseCase = ({ PostsRepository }) => {
    return {
        async run(post: Post) {
            const { result, error } = await PostsRepository.update(post);
            return { result, error };
        }
    }
}