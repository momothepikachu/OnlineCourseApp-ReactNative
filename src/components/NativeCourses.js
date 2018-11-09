import React, {Component} from 'react';
import data from '../data/courses.json';
import { StyleSheet, Text, View, TouchableOpacity, Linking, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getTheme } from 'react-native-material-kit';

const theme = getTheme()

type Props = {};
export default class NativeCourses extends Component<Props> {
  static navigationOptions = {
      tabBarLabel: 'React Native Courses',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name={'settings-cell'}
          size={26}
          style={{ color: tintColor }}
        />
      )
  }

  handleClick = (link)=>{
    Linking.canOpenURL(link).then(supported => {
      if(supported) {
        Linking.openURL(link);
      } else {
        console.log("Don't know how to open URL:"+link)
      }
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Courses</Text>
        <FlatList
          data={data.filter(course=>course.category==='native')}
          renderItem={({item})=>
            <View style={[theme.cardStyle, styles.card]}>
              <Image 
                source={{uri: item.image}}
                style={theme.cardImageStyle}
              />            
              <Text style={[theme.cardTitleStyle, styles.title]}>{item.title}</Text>
              <Text style={theme.cardContentStyle}>{item.description}</Text>
              <TouchableOpacity 
                style={[theme.cardActionStyle, styles.action, styles.button]}
                onPress={()=>{
                  this.handleClick(item.link)}}
              >
                <Text>Tap to Course</Text>
              </TouchableOpacity>
            </View>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },  
  card: {
    marginTop: 10,
  },
  icon: {
    width: 26,
    height:26
  },
  list: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    left: 0,
    fontSize: 15,
    backgroundColor: 'rgba(245,252,255,0.60)'
  },
  action: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f5fcff',
  },
});