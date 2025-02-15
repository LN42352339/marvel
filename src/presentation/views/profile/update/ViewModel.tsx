import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';

const ProfileUpdateViewModel = ({
  GetUserUseCase,
  UpdateUserUseCase,
  UpdateWithImageUserUseCase,
}) => {
  const [values, setValues] = useState({
    username: '',
    image: '',
  });
  const [file, setFile] = useState<any>(null);
  const [response, setResponse] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getUser = () => {
    const {result, error} = GetUserUseCase.run();
    const myUser = result as FirebaseAuthTypes.User;
    return myUser;
  };

  const update = () => {
    if (file === null || file === undefined) {
      updateWithoutImage();
    } else {
      updateWithImage();
    }
  };

  const updateWithoutImage = async () => {
    setLoading(true);
    const {result, error} = await UpdateUserUseCase.run(getUser().uid, values);
    setResponse(result);
    setError(error);
    setLoading(false);
  };

  const updateWithImage = async () => {
    setLoading(true);
    const {result, error} = await UpdateWithImageUserUseCase.run(
      getUser().uid,
      values,
      file,
    );
    setResponse(result);
    setError(error);
    setLoading(false);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
    if (!result.didCancel) {
      if (result.assets !== undefined) {
        onChange('image', result.assets[0].uri);
        setFile(result.assets[0]);
      }
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCamera({
      mediaType: 'photo',
      quality: 1,
    });
    if (!result.didCancel) {
      if (result.assets !== undefined) {
        onChange('image', result.assets[0].uri);
        setFile(result.assets[0]);
      }
    }
  };

  const onChange = (prop: string, value: any) => {
    setValues({...values, [prop]: value});
  };

  return {
    ...values,
    file,
    response,
    error,
    loading,
    getUser,
    update,
    updateWithImage,
    pickImage,
    takePhoto,
    onChange,
    setValues,
    setError,
  };
};

export default ProfileUpdateViewModel;
