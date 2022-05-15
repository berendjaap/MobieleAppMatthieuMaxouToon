import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Platform } from 'react-native-web';
import 'react-native-gesture-handler';


function WelcomeScreen() {

  return(
      <SafeAreaView  style={styles.container}>
        <View>
          <Text>
            Seems like something went wrong!
          </Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    searchSection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
    container: {
      flex: 1,
      backgroundColor: '#d4e7f3',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    containerExtended: {
      paddingTop: Platform.OS === "android" ?StatusBar.currentHeight:0
    },
    input: {
      height: 40,
      margin: 2,
      // borderWidth: 1,
      padding: 10
    },
    searchIcon: {
      padding: 10,
    },
    naastElkaar: {
      // flex: 1,
      flexDirection: "row",
      //justifyContent: "center",
    },
    container2: {
      backgroundColor: '#d4e7f3',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
export default WelcomeScreen;