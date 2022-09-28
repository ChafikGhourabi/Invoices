import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default ({...props}) => <Icon {...props} />;
