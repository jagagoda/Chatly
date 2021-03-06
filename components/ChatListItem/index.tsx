import React from "react"
import {View, Image, Text, TouchableWithoutFeedback} from "react-native";
import styles from "./style";
import {ChatRoom} from "../../types";
import moment from "moment";
import {useNavigation} from '@react-navigation/native';
import ChatsScreen from "../../screens/ChatsScreen";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;
    const navigation = useNavigation();
    const user = chatRoom.users[1];

    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name,
        });
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri: user.profilePic}} style={styles.avatar}/>
                </View>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
                <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;
