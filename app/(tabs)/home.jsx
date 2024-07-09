// import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { images } from '../../constants'
// import SearchInput from '../../components/SearchInput'
// import Trending from '../../components/Trending'
// import EmptyState from '../../components/EmptyState'
// import { getAllPosts } from '../../lib/appwrite'
// import useAppwrite from '../../lib/useAppwrite'


// const Home = () => {
//   const { data: posts, refetch } = useAppwrite(getAllPosts);

//   const [refreshing, setRefreshing] = useState(false)

//   const onRefresh = async () => {
//     setRefreshing(true);
//     await refetch();
//     setRefreshing(false);
//   }

//   return (
//       <SafeAreaView className="bg-primary border-2 h-full">
//         <FlatList
//           data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
//           keyExtractor={(item) => item.$id}
//           renderItem={({ item }) => (
//             <Text className="text-3xl text-white">{item.title}
//             </Text>
//           )}
//           ListHeaderComponent={() => (
//             <View className="my-6 px-4 space-y-6">
//               <View className="justify-between items-start flex-row mb-6">
//                 <View>
//                   <Text className="font-pmedium font-sm text-gray-100">
//                     Welcome Back{" "}
//                     <Text className="text-2xl font-psemibold text-white">
//                       AIRithmaster
//                     </Text>
//                   </Text>
//                 </View>
//                 <View className="mt-1.5">
//                   <Image
//                     source={images.logo}
//                     className="w-12 h-10"
//                     resizeMode='contain'
//                   />
//                 </View>
//               </View>
//               <SearchInput />
//               <View className="w-full flex-1 pt-5 pb-8">
//                 <Text className="text-lg font-pregular text-gray-100 mb-3">
//                   Latest Videos
//                 </Text>
//                 <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 } ?? []]} />
//             </View>
//             </View>
//           )}
//           ListEmptyComponent={() => (
//             <EmptyState 
//               title="No Videos Found"
//               subtitle="Be the first one to upload a video"
//             />
//           )}
//           refreshControl={<RefreshControl refreshing=
//             {refreshing} onRefresh={onRefresh}
//             />}
//         />
//       </SafeAreaView>
//     );
//   };

// export default Home

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import VideoCard from '../../components/VideoCard';
import { getAllPosts } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#161622', borderWidth: 2 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item}/>
        )}
        ListHeaderComponent={() => (
          <View style={{ marginVertical: 12, paddingHorizontal: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <Text style={{ fontSize: 14, color: 'gray' }}>
                Welcome Back{' '}
                <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>AIRithmaster</Text> {/* Adjusted fontSize to 18 */}
              </Text>
              <Image
                source={images.logo}
                style={{ width: 48, height: 40 }}
                resizeMode='contain'
              />
            </View>
            <SearchInput />
            <View style={{ flex: 1, paddingTop: 20, paddingBottom: 32 }}>
              <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginBottom: 12 }}>
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Home;


