import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function NotificationItem(props) {
    const { item } = props;
    const [showMore, setShowMore] = React.useState(false);
    const [showButton, setShowButton] = React.useState(false);
    const [longText, setLongText] = React.useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    }
    return (
        <View style={styles.listItem}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={styles.timeStyle}>
                    {item.time}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <Avatar style={styles.avatarStyle} icon={props => <Icon name="account" {...props} />} />
                <View style={styles.mainItem}>
                    <Text style={styles.itemName}>
                        {item.name}
                    </Text>
                    <View style={{width:370}}>
                        {longText && !showMore ?
                            <Text style={styles.textMessage} onLayout={(e) => {
                                if (e.nativeEvent.layout.height > 40) {
                                    setLongText(true);
                                    setShowButton(false);
                                }
                            }} >
                                {item.message}
                            </Text> :
                            <Text onLayout={(e) => {
                                if (e.nativeEvent.layout.height > 40) {
                                    setLongText(true);
                                    setShowButton(true);
                                }
                            }} style={{ marginRight: 30, lineHeight: 20 }}>
                                {item.message}
                            </Text>
                        }
                        {showButton && (
                            <View style={styles.readMoreButton}>
                                <Text style={{color:"#74CBD4",right:-30}} onPress={handleShowMore} >
                                    {showMore ? '...Read less' : '...Read more'}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        margin: 5,
        marginTop:19,
        borderBottomColor:"grey",
        borderBottomWidth:1,
        paddingBottom: 5
    },
    timeStyle: {
        fontSize: 12,
        fontWeight: '400',
        marginRight: 10
    },
    avatarStyle: {
        width: 62,
        height: 62,
    },
    mainItem: {
        marginLeft: 10,
        width: "100%",
        paddingRight: 10
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textMessage: {
        width:251,
        height:33,
        marginRight: 30,
        lineHeight: 20,
        overflow: 'hidden',
        // display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    },
    readMoreButton: {
        
        right: 30,
        flexDirection: 'row',
        justifyContent: 'end'
    },
})

export default NotificationItem
