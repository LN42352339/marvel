import {Asset} from 'react-native-image-picker';
import {Post} from '../../../domain/models/Post';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const create = async (post: Post, file: Asset) => {
  try {
    const reference = storage().ref(`/Posts/${file.fileName}`);
    console.log('File name: ', file.fileName);

    const task = await reference.putFile(file.uri!, {
      contentType: 'image/png',
    });
    const url = await reference.getDownloadURL();
    const myPost = {...post, image: url};
    await firestore().collection('Posts').add(myPost);
    return Promise.resolve({result: true, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};

export const updateWithImage = async (post: Post, file: Asset) => {
  try {
    const reference = storage().ref(`/Posts/${file.fileName}`);
    console.log('File name: ', file.fileName);

    const task = await reference.putFile(file.uri!, {
      contentType: 'image/png',
    });
    const url = await reference.getDownloadURL();
    await firestore().collection('Posts').doc(post.id).update({
      name: post.name,
      description: post.description,
      category: post.category,
      image: url,
    });
    return Promise.resolve({result: true, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};

export const update = async (post: Post) => {
  try {
    await firestore().collection('Posts').doc(post.id).update({
      name: post.name,
      description: post.description,
      category: post.category,
    });
    return Promise.resolve({result: true, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};

export const remove = async (idPost: string) => {
  try {
    await firestore().collection('Posts').doc(idPost).delete();
    return Promise.resolve({result: true, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};

export const like = async (idPost: string, idUser: string) => {
  try {
    await firestore()
      .collection('Posts')
      .doc(idPost)
      .update({
        likes: firestore.FieldValue.arrayUnion(idUser),
      });
    return Promise.resolve({result: true, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};

export const dislike = async (idPost: string, idUser: string) => {
  try {
    await firestore()
      .collection('Posts')
      .doc(idPost)
      .update({
        likes: firestore.FieldValue.arrayRemove(idUser),
      });
    return Promise.resolve({result: true, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};

export const getPosts = callback => {
  firestore()
    .collection('Posts')
    .onSnapshot(
      snapshot => {
        const posts = snapshot.docs.map(document => {
          const post = document.data() as Post;
          const id = document.id;
          return {...post, id: id};
        });
        callback({result: posts, error: null});
      },
      error => {
        console.log('Error firestore ', error);
        callback({result: null, error: `Error: ${error}`});
      },
    );
};

export const getPostsById = (idUser: string, callback) => {
  firestore()
    .collection('Posts')
    .where('idUser', '==', idUser)
    .onSnapshot(
      snapshot => {
        const posts = snapshot.docs.map(document => {
          const post = document.data() as Post;
          const id = document.id;
          return {...post, id: id};
        });
        callback({result: posts, error: null});
      },
      error => {
        console.log('Error firestore ', error);
        callback({result: null, error: `Error: ${error}`});
      },
    );
};
