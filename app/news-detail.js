import { View, Text, Image } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

const NewsDetail = () => {
    const params = useLocalSearchParams();
    return (
        <>
            <Header title={"News"} withBack={true} />
            <ScrollView>
                <View>
                    <Image
                        width={"auto"}
                        height={200}
                        source={{ uri: params.image }}
                        alt="Image Data"
                        role="Image"
                        marginBottom={10}
                    />
                    <Text
                        marginBottom={10}
                        paddingHorizontal={15}
                    >
                        {params.date}
                    </Text>
                    <Text
                        textAlign="left"
                        fontWeight="bold"
                        fontSize={23}
                        marginBottom={10}
                        paddingHorizontal={15}

                    >
                        {params.title}
                    </Text>

                    <Text
                        paddingHorizontal={15}

                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet justo at justo fringilla vehicula. Sed ac nisi quam. Integer id tortor eu justo volutpat dapibus. Vestibulum auctor vehicula euismod. Sed sit amet tortor non elit eleifend dapibus. Phasellus eget lectus at eros malesuada feugiat. Duis quis sapien ac urna mattis ultrices. Cras a ligula vel dui vestibulum feugiat.

                        {"\n\n"}Aenean malesuada tincidunt ligula, id fringilla sapien bibendum a. Nunc dapibus, justo vel mattis tincidunt, justo erat facilisis sapien, id auctor metus libero a neque. Sed nec urna at purus malesuada tincidunt. Nulla facilisi. Curabitur ac ipsum eget justo sollicitudin bibendum. Nullam euismod, lorem in cursus condimentum, turpis justo facilisis felis, vel laoreet purus metus sit amet sem.

                        {"\n\n"}Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum nec condimentum nisl. Sed in eros sed elit aliquam consequat. Suspendisse interdum, elit in iaculis interdum, tortor orci ultricies ex, non varius metus elit non libero. Integer et sapien sed justo egestas congue. Mauris vel arcu nec odio congue hendrerit id in dolor.
                    </Text>
                </View>

            </ScrollView>
        </>
    );
};

export default NewsDetail;