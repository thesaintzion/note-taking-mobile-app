import { StyleSheet } from "react-native";

export const homeStyles =  StyleSheet.create({
    // Home
    home_container: {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center'
         }
});


// Auth page styles
export const authPageStyles =  StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        paddingTop: 40
         },

         formTitle:{
             fontSize: 30,
             fontWeight: "bold"
         },

         btn: {
            backgroundColor: "#fdd400",  
            height: 50,
            minWidth:150,
            justifyContent: "center",
            alignItems:"center",
            borderRadius: 10,
            paddingHorizontal: 20,
            marginTop:50,
            elevation: 5
            // position:
         },

       

});

// All Notes styles
export const allNotesStyles =  StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        paddingTop: 40
         },

    title:{
            fontSize: 30,
            fontWeight: "bold"
        },
});

// All Single Note styles
export const singleNoteStyles =  StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'gray'
         }
});

// Note Details styles
export const NoteDetailsStyles =  StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'gray'
         }
});
