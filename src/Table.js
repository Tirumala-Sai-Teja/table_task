import Reat from 'react';
function Table() {
    const tbdata = [
        {name: 'listener 1',
        queue: 'queue 1',
        application: 'application 1',
        contype: 'primary',
            constatus: 'active'
        },
         {name: 'listener 2',       
        queue: 'queue 2',
        application: 'application 2',
        contype: 'primary',
            constatus: 'de-active'
        },
        {
        name: 'listener 2',
        queue: 'queue 2',
        application: 'application 2',
        contype: 'primary',
        constatus:'de-active'},
        
]
    return (
        <table>

            <tr>
                <th>Listener</th>
                <th>Queue</th>
                <th>Application</th>
                <th>ConnectionType</th>
                <th>ConnectionStatus</th>
                <th></th>
            </tr>
            {/* <tr>
                <td>Listener1</td>
                <td>Queue1</td>
                <td>App1</td>
                <td>Primary</td>
                <td>Active</td>
                <td></td>

            </tr> */}
            {tbdata.map(item => (
                <tr>
                    <td>{ item.name}</td>
                    <td>{item.queue}</td>
                    <td>{item.contype}</td>
                    <td>{ item.constatus}</td>
                    
                    
                </tr>
            ))}

    </table>
)
}
export default Table;