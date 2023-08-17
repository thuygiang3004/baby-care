import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

interface IBaby {
  name: string;
  age: string;
}

interface INursingActivity {
  name: string,
  lastTime: string,
  lastTimeInfo: string,
  daySummary?: string,
}
interface IDiaperActivity {
  name: string,
  lastTime: string,
  lastTimeInfo: string,
  daySummary?: string,
}
interface ISleepActivity {
  name: string,
  lastTime: string,
  lastTimeInfo: string,
  daySummary?: string,
}

const registeredBaby: IBaby = {
  name: 'Ryan',
  age: '15 days'
}

const nursingActivity: INursingActivity = {
  name: 'nursing',
  lastTime: '10 minutes ago',
  lastTimeInfo: 'Formula 100ml',
  daySummary: '2 times 300ml'
}
const diaperActivity: IDiaperActivity = {
  name: 'diaper',
  lastTime: '10 minutes ago',
  lastTimeInfo: 'Formula 100ml',
  daySummary: '2 times 300ml'
}
const sleepActivity: ISleepActivity = {
  name: 'sleep',
  lastTime: '10 minutes ago',
  lastTimeInfo: 'Formula 100ml',
  daySummary: '2 times 300ml'
}

const DefaultPicture = require('./assets/Baby.png')
export default function App() {
  const onOpenMenu = () => {

  };
  const onOpenPreview = () => {

  };
  const onOpenNursing = () => {

  };
  return (
    <View style={styles.container}>
      <View style={styles.menuButton}>
        <Pressable onPress={onOpenMenu}>
          <Entypo name="menu" size={40} color='black'/>
        </Pressable>
      </View>
      <View style={styles.pictureHolder}>
        <Image source={DefaultPicture} style={styles.selectedPicture}/>
      </View>
      <View style={styles.overviewBar}>
        <View style={styles.infoBar}>
          <Text style={{fontWeight: 'bold', fontSize: 22}}>
            {registeredBaby.name}
          </Text>
          <Text>
            {registeredBaby.age}
          </Text>
        </View>
        <View style={styles.previewButtonContainer}>
          <Pressable onPress={onOpenPreview}>
            <FontAwesome name="street-view" size={34} color="black"/>
          </Pressable>
        </View>
      </View>
      <View style={styles.trackingActivities}>
        <View style={styles.nursingContainer}>
          <View style={styles.nurseButtonContainer}>
            <Pressable onPress={onOpenNursing}>
              <MaterialCommunityIcons name="baby-bottle" size={60} color="orange" />
            </Pressable>
          </View>
          <View style={styles.nursingInfoContainer}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{nursingActivity.lastTime}</Text>
            <Text style={{fontWeight: '400', fontSize: 16}}>{nursingActivity.lastTimeInfo}</Text>
            <Text style={{fontWeight: '400', fontSize: 16}}>{nursingActivity.daySummary}</Text>
          </View>
          <View>

          </View>
        </View>
        <View style={styles.nursingContainer}>
          <View style={styles.nurseButtonContainer}>
            <Pressable onPress={onOpenNursing}>
              <MaterialCommunityIcons name="baby-bottle" size={60} color="orange" />
            </Pressable>
          </View>
          <View style={styles.nursingInfoContainer}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{nursingActivity.lastTime}</Text>
            <Text style={{fontWeight: '400', fontSize: 16}}>{nursingActivity.lastTimeInfo}</Text>
            <Text style={{fontWeight: '400', fontSize: 16}}>{nursingActivity.daySummary}</Text>
          </View>
          <View>

          </View>
        </View>
        <View style={styles.nursingContainer}>
          <View style={styles.nurseButtonContainer}>
            <Pressable onPress={onOpenNursing}>
              <MaterialCommunityIcons name="baby-bottle" size={60} color="orange" />
            </Pressable>
          </View>
          <View style={styles.nursingInfoContainer}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{nursingActivity.lastTime}</Text>
            <Text style={{fontWeight: '400', fontSize: 16}}>{nursingActivity.lastTimeInfo}</Text>
            <Text style={{fontWeight: '400', fontSize: 16}}>{nursingActivity.daySummary}</Text>
          </View>
          <View>

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pictureHolder: {
    flex: 1,
    paddingTop: 50,
  },
  selectedPicture: {
    width: 430,
    height: 280,
  },
  overviewBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 14,
    backgroundColor: 'pink'
  },
  infoBar: {
  },
  previewButtonContainer: {

  },
  trackingActivities: {
    flex: 2,
    backgroundColor: 'green',
    width: '100%',
  },
  menuButton: {
    background:'pink',
    position: "absolute",
    top: 80,
    left: 20,
    zIndex: 1000
  },
  nursingContainer: {
    flex: 1/3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  nurseButtonContainer: {
    padding: 10
  },
  nursingInfoContainer: {

  }


});
